// I know, hardcoded data is lame, I should use a DB with controllers, sue me...
const data = () => ({
  coding: [
    { mon: true, tue: false, wed: false, thu: false, fri: false, sat: false, sun: true },
    { mon: false, tue: true, wed: true, thu: true, fri: false, sat: true, sun: false },
    { mon: true, tue: false, wed: false, thu: false, fri: true, sat: false, sun: true },
    { mon: true, tue: true, wed: false, thu: false, fri: true, sat: false, sun: true },
    { mon: true, tue: true, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: true, tue: false, wed: true, thu: false, fri: false, sat: false, sun: true },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: true },
    { mon: true, tue: false, wed: true, thu: false, fri: false, sat: true, sun: false },
    { mon: true, tue: false, wed: false, thu: false, fri: true, sat: true, sun: false },
    { mon: true, tue: false, wed: false, thu: true, fri: false, sat: false, sun: true },
    { mon: true, tue: false, wed: false, thu: false, fri: false, sat: true, sun: true },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: true, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: true, tue: true, wed: false, thu: false, fri: false, sat: false, sun: false },

  ],
  meditation: [
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: true, sun: true },
    { mon: true, tue: false, wed: false, thu: false, fri: true, sat: false, sun: true },
    { mon: false, tue: true, wed: false, thu: false, fri: false, sat: true, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: true, wed: false, thu: false, fri: true, sat: true, sun: false },
    { mon: false, tue: false, wed: false, thu: true, fri: true, sat: true, sun: false },
    { mon: true, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: true, tue: false, wed: true, thu: false, fri: true, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: true, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: true, tue: true, wed: false, thu: false, fri: false, sat: false, sun: false },

  ],
  earlybird: [
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },    
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: true, fri: true, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: true, fri: false, sat: true, sun: true },
    { mon: false, tue: true, wed: true, thu: true, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: true, thu: false, fri: false, sat: false, sun: true },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },

  ],
  blog: {
    current: 1,
    goal: 6
  },
  people: {
    current: 0,
    goal: 2
  },
  talks: {
    current: 0,
    goal: 3
  },
  twitter: {
    current: 10,
    goal: 50
  },
  salad: {
    current: 27,
    goal: 200
  },
  opensource: {
    current: 1,
    goal: 3
  },
  internal: {
    current: 0,
    goal: 2
  },
  tracks: {
    current: 0,
    goal: 2
  },
  revenue: false,
  deadlift: false,
  curl: false,
  press: false,
  squat: false,
  pushup: false,
  situp: true,
  run: false,
  perform: false
});

module.exports = data;