// I know, hardcoded data is lame, I should use a DB with controllers, sue me...
const data = () => ({
  coding: [
    { mon: true, tue: false, wed: false, thu: false, fri: false, sat: false, sun: true },
    { mon: false, tue: true, wed: true, thu: true, fri: false, sat: false, sun: false },
  ]
});

module.exports = data;