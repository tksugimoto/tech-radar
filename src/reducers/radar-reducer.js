import { handleActions } from 'redux-actions'
import Actions from '../actions/radar-actions'

const initialState = {
  entries: [
    {
      label: "react",
      quadrant: "Languages&Frameworks",
      ring: "ADOPT",
    },
    {
      label: "redux",
      quadrant: "Languages&Frameworks",
      ring: "ADOPT",
    },
    {
      label: "Atomic Design",
      quadrant: "Techniques",
      ring: "ADOPT",
    },
    {
      label: "babel 7",
      quadrant: "Tools",
      ring: "ADOPT",
    },
    {
      label: "Netlify",
      quadrant: "Platforms",
      ring: "ADOPT",
    },
  ],
  width: 1450,
  height: 1000,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: 'Tech Radar',
  quadrants: [
    { name: "Techniques" },
    { name: "Tools" },
    { name: "Platforms" },
    { name: "Languages&Frameworks" }
  ],
  rings: [
    { name: "ADOPT", color: "#93c47d" },
    { name: "TRIAL", color: "#93d2c2" },
    { name: "ASSESS", color: "#fbdb84" },
    { name: "HOLD", color: "#efafa9" }
  ],
  print_layout: true
}

export default handleActions({
  [Actions.setRadar]: (state, action) => ({
    ...state, ...action.payload
  })
}, initialState)
