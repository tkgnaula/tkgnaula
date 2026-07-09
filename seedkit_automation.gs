/**
 * TKG — VPBank Elite Seed Kit — Email Automation
 * ------------------------------------------------
 * Paste this into: Google Sheet (Form Responses) > Extensions > Apps Script
 *
 * WHAT THIS DOES
 * 1) sendWelcomeEmail(e)   — fires the moment someone submits the form.
 *    Sends an immediate email with their personal discount code.
 * 2) sendGrowingUpdates()  — run once daily on a time trigger.
 *    Checks every row; if it's been exactly 7 / 30 / 60 days since
 *    signup, sends that stage's growing-update email (only once each).
 *
 * SETUP (one-time)
 * A) Open the Google Sheet that collects this form's responses.
 * B) Extensions > Apps Script. Delete any starter code, paste this file.
 * C) In the Apps Script editor, click the clock icon (Triggers) and add:
 *      - Trigger 1: function "sendWelcomeEmail", event source "From
 *        spreadsheet", event type "On form submit".
 *      - Trigger 2: function "sendGrowingUpdates", event source
 *        "Time-driven", type "Day timer", any hour (e.g. 8–9am).
 * D) Run "sendWelcomeEmail" once manually first — Google will ask you
 *    to authorize Gmail + Sheets access. Approve it.
 * E) Adjust COLUMN NAMES below to match your actual form's column
 *    headers exactly (case-sensitive) if you changed the field labels.
 */

// ---- CONFIG ----------------------------------------------------------

// These must match the column headers in your Form Responses sheet.
const COL = {
  timestamp: "Timestamp",
  fullName: "Họ và tên",
  email: "Email",
  bib: "Số BIB",
  consentUpdates: "Tôi muốn nhận cập nhật gieo trồng định kỳ và mã ưu đãi qua email",
};

// Discount code structure: TKGSEED-[Số BIB]-EVENT_CODE
// e.g. bib 1023 → TKGSEED-1023-VPB0826
const DISCOUNT_CODE_PREFIX = "TKGSEED";
const EVENT_CODE = "VPB0826"; // update per race if this template is reused later

// Days after signup to send a growing-update email, and the tracking
// column name the script will create/use for each to avoid duplicates.
const UPDATE_SCHEDULE = [
  { day: 7, trackingCol: "Sent_Day7", subject: "Tuần đầu tiên của hạt giống tía tô",
    body: (name) => `Chào ${name},\n\nĐã một tuần kể từ khi bạn nhận hạt giống tía tô từ TKG. Đây là lúc kiểm tra đất có đủ ẩm và có ánh sáng nhẹ vào buổi sáng chưa nhé.\n\nGửi TKG một tấm ảnh nếu bạn muốn — trả lời email này là được.\n\nTKG · Rooted in Vietnam. Prepared with Care.` },
  { day: 30, trackingCol: "Sent_Day30", subject: "Một tháng rồi — cây tía tô của bạn ra sao?",
    body: (name) => `Chào ${name},\n\nMột tháng đã trôi qua. Nếu cây đã ra vài lá thật, đây là lúc có thể tỉa nhẹ để cây phát triển đều hơn.\n\nTKG rất muốn xem cây của bạn — trả lời email này với một tấm ảnh nếu bạn muốn.\n\nTKG · Rooted in Vietnam. Prepared with Care.` },
  { day: 60, trackingCol: "Sent_Day60", subject: "60 ngày cùng cây tía tô của bạn",
    body: (name) => `Chào ${name},\n\nCảm ơn bạn đã đồng hành cùng TKG suốt 2 tháng qua. Hy vọng cây tía tô đã trở thành một phần quen thuộc trong không gian của bạn.\n\nNếu bạn đồng ý cho TKG chia sẻ hình ảnh hoặc câu chuyện của bạn, chỉ cần trả lời email này.\n\nTKG · Rooted in Vietnam. Prepared with Care.` },
];

// ---- 1) IMMEDIATE WELCOME EMAIL --------------------------------------

function sendWelcomeEmail(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const row = e && e.range ? e.range.getRow() : sheet.getLastRow();
  const rowData = sheet.getRange(row, 1, 1, sheet.getLastColumn()).getValues()[0];

  const get = (colName) => rowData[headers.indexOf(colName)];

  const name = get(COL.fullName) || "bạn";
  const email = get(COL.email);
  const bib = String(get(COL.bib) || "").trim();
  const consent = String(get(COL.consentUpdates) || "").toLowerCase();

  if (!email) return;
  if (consent.indexOf("có") === -1 && consent.indexOf("yes") === -1) return; // respects opt-in

  // Falls back to a row-based ID (flagged with "R") only if BIB is somehow
  // missing, so nobody is left without a code — but this should not happen
  // since Số BIB is now a required field on the form.
  const bibPart = bib ? bib : `R${row}`;
  const code = `${DISCOUNT_CODE_PREFIX}-${bibPart}-${EVENT_CODE}`;

  const subject = "Mã ưu đãi TKG của bạn đã sẵn sàng";
  const body =
`Chào ${name},

Cảm ơn bạn đã đăng ký hạt giống tía tô TKG.

Mã ưu đãi cho đơn hàng TKG đầu tiên của bạn: ${code}

TKG sẽ gửi vài cập nhật ngắn về cách chăm cây trong những tuần tới.

TKG · Rooted in Vietnam. Prepared with Care.`;

  MailApp.sendEmail(email, subject, body);

  // Store the code back into the sheet for reference (creates column if missing).
  writeToTrackingColumn(sheet, headers, row, "Discount_Code", code);
}

// ---- 2) PERIODIC GROWING-UPDATE EMAILS (daily trigger) ---------------

function sendGrowingUpdates() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const headers = data[0];

  const idx = (colName) => headers.indexOf(colName);
  const today = new Date();

  for (let r = 1; r < data.length; r++) {
    const rowData = data[r];
    const timestamp = rowData[idx(COL.timestamp)];
    const email = rowData[idx(COL.email)];
    const name = rowData[idx(COL.fullName)] || "bạn";
    const consent = String(rowData[idx(COL.consentUpdates)] || "").toLowerCase();

    if (!timestamp || !email) continue;
    if (consent.indexOf("có") === -1 && consent.indexOf("yes") === -1) continue;

    const daysSince = Math.floor((today - new Date(timestamp)) / (1000 * 60 * 60 * 24));

    UPDATE_SCHEDULE.forEach((stage) => {
      const trackCol = idx(stage.trackingCol);
      const alreadySent = trackCol > -1 && rowData[trackCol] === "Yes";

      if (daysSince === stage.day && !alreadySent) {
        MailApp.sendEmail(email, stage.subject, stage.body(name));
        writeToTrackingColumn(sheet, headers, r + 1, stage.trackingCol, "Yes");
      }
    });
  }
}

// ---- helper: write a value into a named column, creating it if needed ----

function writeToTrackingColumn(sheet, headers, row, colName, value) {
  let col = headers.indexOf(colName) + 1;
  if (col === 0) {
    col = sheet.getLastColumn() + 1;
    sheet.getRange(1, col).setValue(colName);
  }
  sheet.getRange(row, col).setValue(value);
}
