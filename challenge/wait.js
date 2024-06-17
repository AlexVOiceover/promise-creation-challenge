function wait(ms) {
  const promise = new Promise((resolve) =>{
    setTimeout(() => {
      resolve();
    }, ms);

  })
  return promise
}

module.exports = { wait };
 