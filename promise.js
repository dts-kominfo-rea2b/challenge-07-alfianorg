const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (param) => {
  try {
    const [theaterIXX, theaterVGC] = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()]);
    const result = [...theaterIXX, ...theaterVGC];
    return result?.filter((item) => item.hasil === param)?.length || 0;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  promiseOutput,
};
