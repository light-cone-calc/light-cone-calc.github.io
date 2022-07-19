/* global CosmicExpansion */

// Import the rest from the LightConeCalc module.
const { create } = CosmicExpansion;

// Gather the inputs from the UI.
const getInputs = () => {
  const modelOptions = {
    zEq: parseFloat(window.document.frmCalc.z_eq.value),
    omega0: parseFloat(window.document.frmCalc.Omega.value),
    omegaLambda0: parseFloat(window.document.frmCalc.OmegaL.value),
    h0: parseFloat(window.document.frmCalc.H_0.value),
  };

  const expansionInputs = {
    stretch: [
      parseFloat(window.document.frmCalc.z_upper.value) + 1,
      parseFloat(window.document.frmCalc.z_lower.value) + 1,
    ],
    steps: parseFloat(window.document.frmCalc.steps.value),
    exponentialSteps: !window.document.frmCalc.chkExponential.checked,
  };

  return [modelOptions, expansionInputs];
};

/**
 * Calculate is called by the front end to do the integration.
 *
 * We now ignore the inputs provided by the front end and extract these
 * directly from the html `input` elements.
 *
 * @returns Integration results.
 */
const convertLegacyOutputs = (data, model) =>
  data.map((entry) => {
    return {
      s: entry.s,
      a: entry.a,
      z: entry.z,
      Vnow: entry.vNow,
      Vthen: entry.v,
      Tnow: entry.t,
      Y: entry.r,
      Dnow: entry.dNow,
      Dthen: entry.d,
      Dhor: entry.r,
      XDpar: entry.vGen,
      Dpar: entry.dPar,
      H_t: entry.h * model.props.kmsmpscToGyr,
      OmegaMatterT: entry.omegaM,
      OmegaLambdaT: entry.omegaLambda,
      OmegaRadiationT: entry.omegaRad,
      TemperatureT: entry.temperature,
      rhocrit: entry.rhoCrit,
      OmegaTotalT: entry.omega,
    };
  });

/**
 * Calculate is called by the front end to do the integration.
 *
 * We now ignore the inputs provided by the front end and extract these
 * directly from the html `input` elements.
 *
 * @returns Integration results.
 */
// eslint-disable-next-line no-unused-vars
function Calculate() {
  const [modelOptions, expansionInputs] = getInputs();
  const model = create(modelOptions);
  return convertLegacyOutputs(model.calculateExpansion(expansionInputs), model);
}

/**
 * CalculateTage is called by the front end to do the integration.
 *
 * We now ignore the inputs provided by the front end and extract these
 * directly from the html `input` elements.
 *
 * @returns The current age according to the input parameters.
 */
function CalculateTage() {
  const [modelOptions] = getInputs();
  return create(modelOptions).age;
}

// eslint-disable-next-line no-unused-vars
function ScaleResults(resultList, input, OutputScaling) {
  const MegaParsec = 3.262; // 1 Gpc = 3.264 Gly

  const [modelOptions] = getInputs();
  const model = create(modelOptions);
  const ConversionHo = 1 / model.props.kmsmpscToGyr;

  const Ynow = input.Ynow;
  const Tage = CalculateTage(input);

  const Yinf = Math.max(input.Yinf, Ynow);

  for (let i = 0; i < resultList.length; i++) {
    const result = resultList[i];

    switch (OutputScaling) {
      case 'GigaLightyear':
        result.H_t = result.H_t * ConversionHo;
        break;
      case 'Gigaparsec':
        result.Y = result.Y / MegaParsec;
        result.Dnow = result.Dnow / MegaParsec;
        result.Dthen = result.Dthen / MegaParsec;
        result.Dhor = result.Dhor / MegaParsec;
        result.Dpar = result.Dpar / MegaParsec;
        result.H_t = result.H_t * ConversionHo;
        break;
      case 'Normalized':
        result.Tnow = result.Tnow / Tage;
        result.Y = result.Y / Ynow;
        result.Dnow = result.Dnow / Ynow;
        result.Dthen = result.Dthen / Ynow;
        result.Dhor = result.Dhor / Ynow;
        result.Dpar = result.Dpar / Ynow;
        result.H_t = result.H_t * Ynow;
        result.TemperatureT = result.TemperatureT / model.props.temperature0;
        break;
      case 'Zeit':
        result.Tnow = result.Tnow / Yinf;
        result.Y = result.Y / Yinf;
        result.Dnow = result.Dnow / Yinf;
        result.Dthen = result.Dthen / Yinf;
        result.Dhor = result.Dhor / Yinf;
        result.Dpar = result.Dpar / Yinf;
        result.H_t = result.H_t * Yinf;
        break;
    }
  }
}
