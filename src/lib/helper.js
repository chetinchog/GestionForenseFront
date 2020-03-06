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

const imageToBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export default { Covenant, imageToBase64 };
