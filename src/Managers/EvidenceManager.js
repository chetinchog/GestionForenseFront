const mockEvidences = [
  {
    _id: 0,
    number: 255666890,
    state: "PENDIENTE DE REVISIÓN",
    description: "Escena del hecho",
    createdAt: new Date(),
    modifiedAt: new Date()
  },
  {
    _id: 1,
    number: 344555553,
    state: "APROBADO",
    description: "Escena del hecho",
    createdAt: new Date(),
    modifiedAt: new Date()
  },
  {
    _id: 2,
    number: 482328642,
    state: "RECHAZADO",
    description: "Escena del hecho",
    createdAt: new Date(),
    modifiedAt: new Date()
  }
];

const getListEvidence = async () => {
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
    }, 100)
  );
  return mockEvidences;
};

const getEvidence = async id => {
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
    }, 100)
  );
  return mockEvidences.find(item => item._id.toString() === id.toString());
};

export default { getListEvidence, getEvidence };
