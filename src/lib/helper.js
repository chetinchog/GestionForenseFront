const Covenant = (onResolve, onReject) =>
  new Promise(async (resolve, reject) => {
    try {
      if (onResolve) {
        if (typeof onResolve === "function") resolve(await onResolve());
        else resolve(await onResolve);
      } else resolve();
    } catch (e) {
      if (onReject) {
        if (typeof onReject === "function") resolve(await onReject());
        else resolve(await onReject);
      } else resolve();
    }
  });

export default { Covenant };
