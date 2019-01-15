// I know, hardcoded data is lame, I should use a DB with controllers, sue me...
const data = () => ({
  coding: [
    { mon: true, tue: false, wed: false, thu: false, fri: false, sat: false, sun: true },
    { mon: false, tue: true, wed: true, thu: true, fri: false, sat: true, sun: false },
    { mon: true, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
  ],
  meditation: [
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
  ],
  blog: {
    current: 0,
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
    current: 5,
    goal: 200
  },
  opensource: {
    current: 0,
    goal: 3
  },
  internal: {
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
  run: false
});

module.exports = data;