function getSessionErrorData(req, defaultValues) {
  let sessionInputData = req.session.inputData;

  if (!sessionInputData) {
    sessionInputData = {
      hasError: false,
      ...defaultValues,
    };
  }

  req.session.inputData = null;
  return sessionInputData;
}

function flashErrorsToSession(req, data, action) {
  req.session.inputData = {
    hasError: true,
    ...data,
    // an object data comes from different routes.. It spread the property of the data in the inputData.
  };

  req.session.save(action);
}

module.exports = {
  getSessionErrorData: getSessionErrorData,
  flashErrorsToSession: flashErrorsToSession,
};
