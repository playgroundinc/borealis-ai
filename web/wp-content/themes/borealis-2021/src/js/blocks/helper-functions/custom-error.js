export default function CustomErrors(fields, values) {
  const compileErrors = (fields, values) => {
    if (Object.keys(fields).length > 0 && fields.constructor === Object && values.length > 0) {
      const errorFields = values.filter((value) => {
        return fields[`${value}`] === undefined;
      });
      return errorFields;
    } 
    throw new Error(`${fields.type} control missing all required fields`);
  }

  const verifyInputs = (fields, values) => {
    const errorFields = compileErrors(fields, values);
    if (errorFields.length > 0) {
      throw new Error( `${fields.type} control is missing properties ${errorFields.join(', ')} `)
    } 
  }

  verifyInputs(fields, values);
}
