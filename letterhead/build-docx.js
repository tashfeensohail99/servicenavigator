/* Premium SeniorNavigator Word letterhead (.docx).
   The full letterhead artwork (spine, masthead, contact block, watermark, footer)
   is rendered from the HTML letterhead to a full-page image and placed as a
   page-anchored background in the header — so the .docx looks EXACTLY like the
   PDF, while the letter body stays fully editable. */
const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, ImageRun, Header, Footer,
  HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, TextWrappingType,
} = require('docx');

const TEAL = '0C4A5A', GRAY = '5C6F77', INK = '22323A', FAINT = '9AA6AB';
const SERIF = 'Georgia', SANS = 'Calibri';

// ---- Full-page letterhead artwork as a page background (repeats on every page) ----
const background = new ImageRun({
  type: 'png',
  data: fs.readFileSync(__dirname + '/assets/letterhead-bg.png'),
  transformation: { width: 816, height: 1056 }, // 8.5in x 11in (US Letter) at 96dpi
  floating: {
    horizontalPosition: { relative: HorizontalPositionRelativeFrom.PAGE, offset: 0 },
    verticalPosition: { relative: VerticalPositionRelativeFrom.PAGE, offset: 0 },
    behindDocument: true,
    allowOverlap: true,
    wrap: { type: TextWrappingType.NONE },
  },
  altText: { title: 'SeniorNavigator Services letterhead', description: 'SeniorNavigator Services branded letterhead', name: 'Letterhead' },
});

const header = new Header({ children: [new Paragraph({ spacing: { after: 0, line: 1 }, children: [background] })] });
const footer = new Footer({ children: [new Paragraph({ children: [new TextRun('')] })] });

// ---- Editable letter body (sits in the writing area between masthead & footer) ----
const ph = (text) => new TextRun({ text, italics: true, color: FAINT });
const body = [
  new Paragraph({ spacing: { after: 140 }, children: [ph('[ Date ]')] }),
  new Paragraph({ spacing: { after: 0 }, children: [ph('[ Recipient name ]')] }),
  new Paragraph({ spacing: { after: 0 }, children: [ph('[ Title · Organization ]')] }),
  new Paragraph({ spacing: { after: 200 }, children: [ph('[ Street address, City, Province ]')] }),
  new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: 'Dear [ Name ],', color: INK })] }),
  new Paragraph({ spacing: { after: 200, line: 300 }, children: [ph('Begin your letter here. This letterhead repeats on every page — simply replace the bracketed placeholders and type your message. Leave the header, footer and margins unchanged to keep the premium layout.')] }),
  new Paragraph({ spacing: { after: 0 }, children: [new TextRun('')] }),
  new Paragraph({ spacing: { after: 0 }, children: [new TextRun('')] }),
  new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: 'With warm regards,', color: INK })] }),
  new Paragraph({ spacing: { after: 0 }, children: [new TextRun('')] }),
  new Paragraph({ spacing: { after: 0 }, children: [new TextRun('')] }),
  new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: 'Kamran Hamayun', font: SERIF, bold: true, size: 24, color: TEAL })] }),
  new Paragraph({ children: [new TextRun({ text: 'Founder & Director · SeniorNavigator Services Limited', font: SANS, size: 19, color: GRAY })] }),
];

const doc = new Document({
  creator: 'SeniorNavigator Services',
  title: 'SeniorNavigator Services — Letterhead',
  styles: { default: { document: { run: { font: SANS, size: 22, color: INK } } } },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 }, // US Letter
        // Writing area measured from the artwork: masthead rule @1.71in, footer rule @10.13in
        margin: { top: 2664, right: 1152, bottom: 1512, left: 1224, header: 432, footer: 432 },
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
