export default {
  state: {
    showWindow: false,
    indexPattern: "",
    inEdit: "",
    showWind: "false",
    valute: "$",
    newData: false,
    clearPattern: {
      name: "",
      price: "",
      units: "",
      discontin: false,
    },
    records: [
      {
        id: 0,
        name: "12",
        price: 3.00,
        units: 0,
        discontin: false,
      },
      {
        id: 1,
        name: "Chai",
        price: 18.00,
        units: 39,
        discontin: true,
      },
      {
        id: 2,
        name: "Chang",
        price: 19.00,
        units: 17.00,
        discontin: false,
      },
    ],
    headers: [
      { name: "ID", type: "number" },
      { name: "Product Name", type: "text" },
      { name: "Unit Price", type: "number" },
      { name: "Units in stock", type: "number" },
      { name: "Discontinued", type: "checkbox" },
    ],
  },
  mutations: {
    hideWindow(state) {
      state.showWindow = false;
    },
    showWindow(state, payload) {
      state.status = payload.status;
      state.showWindow = true;
      state.newData = payload.status;
      if (state.newData == false) {
        state.indexPattern = payload.index;
        state.inEdit = state.records[payload.index];
      } else {
        state.inEdit = payload.clearRow;
      }
    },
    save(state, payload) {
      if (state.newData == false) {
        state.records.splice(payload.index, 1, payload.newData);
      } else {
        console.log(state.inEdit);
        state.records.push(payload.newData);
      }
      state.showWindow = false;
    },
    remove(state, id) {
      state.records = state.records.filter((i) => i.id != id);
    },
  },
  actions: {},
  getters: {
    getClearPattern(state) {
      if (state.records[state.records.length - 1] == null) var lastid = 0;
      else lastid = state.records[state.records.length - 1].id + 1;
      return {
        id: lastid,
        name: "",
        price: "",
        units: "",
        discontin: false,
      };
    },
    isNew(state) {
      return state.newData;
    },
    getValute(state) {
      return state.valute;
    },
    getPattern(state) {
      return state.inEdit;
    },
    getIndexOfPattern(state) {
      return state.indexPattern;
    },
    getHeaders(state) {
      return state.headers;
    },
    getRecords(state) {
      return state.records;
    },
    isShow(state) {
      return state.showWindow;
    },
  },
};
