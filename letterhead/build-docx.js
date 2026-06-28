/* Builds the premium SeniorNavigator Services Word letterhead (.docx). */
const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun,
  Header, Footer, AlignmentType, BorderStyle, WidthType, VerticalAlign,
  HorizontalPositionRelativeFrom, HorizontalPositionAlign,
  VerticalPositionRelativeFrom, VerticalPositionAlign, TextWrappingType,
} = require('docx');

// ---- brand tokens ----
const TEAL = '0C4A5A', GOLD = 'C9A24B', GOLD_TX = 'A6792E', GRAY = '5C6F77', INK = '22323A', FAINT = '9AA6AB';
const SERIF = 'Georgia', SANS = 'Calibri';
const noB = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const tableNoBorders = { top: noB, bottom: noB, left: noB, right: noB, insideHorizontal: noB, insideVertical: noB };

// ---- masthead (header) ----
const logo = new ImageRun({
  type: 'png', data: fs.readFileSync(__dirname + '/assets/logo.png'),
  transformation: { width: 288, height: 77 },
  altText: { title: 'SeniorNavigator Services', description: 'SeniorNavigator Services logo', name: 'Logo' },
});

const watermark = new ImageRun({
  type: 'png', data: fs.readFileSync(__dirname + '/assets/watermark.png'),
  transformation: { width: 430, height: 430 },
  floating: {
    horizontalPosition: { relative: HorizontalPositionRelativeFrom.PAGE, align: HorizontalPositionAlign.CENTER },
    verticalPosition: { relative: VerticalPositionRelativeFrom.PAGE, align: VerticalPositionAlign.CENTER },
    behindDocument: true, allowOverlap: true,
    wrap: { type: TextWrappingType.NONE },
  },
  altText: { title: 'Compass watermark', description: 'Faint compass watermark', name: 'Watermark' },
});

const contactLine = (text, opts = {}) => new Paragraph({
  alignment: AlignmentType.RIGHT, spacing: { after: 18, line: 240 },
  children: [new TextRun({ text, font: SANS, size: opts.size || 18, bold: !!opts.bold, color: opts.color || GRAY })],
});

const header = new Header({
  children: [
    // watermark carrier (floating, behind text)
    new Paragraph({ spacing: { after: 0, line: 1 }, children: [watermark] }),
    new Table({
      width: { size: 10080, type: WidthType.DXA },
      columnWidths: [6180, 3900],
      borders: tableNoBorders,
      rows: [new TableRow({
        children: [
          new TableCell({
            width: { size: 6180, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER,
            margins: { top: 0, bottom: 0, left: 0, right: 80 }, borders: tableNoBorders,
            children: [
              new Paragraph({ spacing: { after: 40 }, children: [logo] }),
              new Paragraph({ children: [new TextRun({ text: 'By your side, every step of the way.', font: SERIF, italics: true, size: 17, color: GRAY })] }),
            ],
          }),
          new TableCell({
            width: { size: 3900, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER,
            margins: { top: 0, bottom: 0, left: 80, right: 0 }, borders: tableNoBorders,
            children: [
              contactLine('+1 (437) 559-2990', { bold: true, color: TEAL, size: 21 }),
              contactLine('admin@seniornavigator.ca'),
              contactLine('www.seniornavigator.ca'),
              contactLine('Mississauga, Ontario'),
            ],
          }),
        ],
      })],
    }),
    // gold rule
    new Paragraph({
      spacing: { before: 80, after: 0 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 18, color: GOLD, space: 2 } },
      children: [new TextRun({ text: '', size: 2 })],
    }),
  ],
});

// ---- footer ----
const dot = () => new TextRun({ text: '   ·   ', font: SANS, size: 15, color: GOLD_TX });
const footer = new Footer({
  children: [
    new Paragraph({
      alignment: AlignmentType.CENTER, spacing: { before: 60, after: 30 },
      border: { top: { style: BorderStyle.SINGLE, size: 14, color: GOLD, space: 6 } },
      children: [
        new TextRun({ text: 'SeniorNavigator Services Limited', font: SANS, bold: true, size: 16, color: TEAL }),
        dot(),
        new TextRun({ text: 'Ontario Corporation No. 1001484077', font: SANS, size: 16, color: GRAY }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER, spacing: { after: 30 },
      children: [new TextRun({ text: '448 Gibraltar Drive, Unit 9, Mississauga, ON L5T 2N8   ·   +1 (437) 559-2990   ·   admin@seniornavigator.ca   ·   www.seniornavigator.ca', font: SANS, size: 15, color: GRAY })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: 'N O N - M E D I C A L   S E N I O R   S U P P O R T      ·      E N G L I S H   ·   U R D U   ·   P A S H T O', font: SANS, bold: true, size: 13, color: GOLD_TX })],
    }),
  ],
});

// ---- body (ready-to-type letter template) ----
const ph = (text) => new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text, italics: true, color: FAINT })] });
const blank = (n = 1) => Array.from({ length: n }, () => new Paragraph({ children: [new TextRun('')] }));

const body = [
  ...blank(1),
  ph('[ Date ]'),
  ...blank(1),
  new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: '[ Recipient name ]', italics: true, color: FAINT })] }),
  new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: '[ Title · Organization ]', italics: true, color: FAINT })] }),
  new Paragraph({ spacing: { after: 160 }, children: [new TextRun({ text: '[ Street address, City, Province ]', italics: true, color: FAINT })] }),
  new Paragraph({ spacing: { after: 160 }, children: [new TextRun({ text: 'Dear [ Name ],', color: INK })] }),
  new Paragraph({ spacing: { after: 160, line: 300 }, children: [new TextRun({ text: 'Begin your letter here. This template carries the SeniorNavigator letterhead and footer on every page — simply replace the bracketed placeholders and type your message. To keep the premium look, leave the header, footer and margins unchanged.', italics: true, color: FAINT })] }),
  ...blank(4),
  new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: 'With warm regards,', color: INK })] }),
  ...blank(2),
  new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: 'Kamran Hamayun', font: SERIF, bold: true, size: 24, color: TEAL })] }),
  new Paragraph({ children: [new TextRun({ text: 'Founder & Director · SeniorNavigator Services Limited', font: SANS, size: 19, color: GRAY })] }),
];

// ---- document ----
const doc = new Document({
  creator: 'SeniorNavigator Services',
  title: 'SeniorNavigator Services — Letterhead',
  styles: { default: { document: { run: { font: SANS, size: 22, color: INK } } } },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 2200, right: 1080, bottom: 1700, left: 1080, header: 560, footer: 460 },
      },
    },
    headers: { default: header },
    footers: { default: footer },
    children: body,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(__dirname + '/SeniorNavigator-Letterhead.docx', buf);
  console.log('wrote SeniorNavigator-Letterhead.docx (' + buf.length + ' bytes)');
});
