// Keep this from the legacy Calculation.js file.
var CalcInput = pojo(
  'Ynow',
  'Yinf',
  's_eq',
  's_lower',
  's_upper',
  's_step',
  'exponential',
  'S1Included',
  'Omega'
);

// Import the rest from the LightConeCalc module.
const { create } = CosmicExpansion;

// Provide light-cone-calc legacy interface.

const convertLegacyInputs = (inputs) => {
  const { Ynow, s_eq, Omega, s_lower, s_upper, s_step, exponential } = inputs;

  const Yinf = Math.max(Ynow, inputs.Yinf);
  const OmegaL = (Ynow / Yinf) * (Ynow / Yinf); // Lambda density parameter
  const H0GYr = 1 / Ynow; // Hubble const now
  const modelOptions = {
    // Ynow,
    // Yinf,
    zEq: s_eq - 1,
    omega0: Omega,
    omegaLambda0: OmegaL,
    // The legacy code passes Ynow = 978 / H_0.
    h0: H0GYr * 978,
    temperature0: 2.72548,
  };
  const expansionInputs = {
    stretch: [s_upper, s_lower],
    steps: s_step,
    exponentialSteps: exponential ? true : false,
  };
  return [modelOptions, expansionInputs];
};

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

function Calculate(inputs) {
  const [modelOptions, expansionInputs] = convertLegacyInputs(inputs);
  const model = create(modelOptions);
  return convertLegacyOutputs(model.calculateExpansion(expansionInputs), model);
}

// This uses a bit of a hack to calculate the current age of the universe:
// the integration only needs to be done from s = 1 to infinity so s = 2 is
// redundant.
function CalculateTage(inputs) {
  const [modelOptions] = convertLegacyInputs(inputs);
  return create(modelOptions).age;
}

function ScaleResults(resultList, input, OutputScaling) {
  var MegaParsec = 3.262; // 1 Gpc = 3.264 Gly

  const [modelOptions] = convertLegacyInputs(input);
  const model = create(modelOptions);
  var ConversionHo = 1 / model.props.kmsmpscToGyr;

  var Ynow = input.Ynow;
  var Tage = CalculateTage(input);

  var Yinf = input.Yinf;
  if (Yinf < Ynow) Yinf = Ynow;

  for (var i = 0; i < resultList.length; i++) {
    var result = resultList[i];

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
