export default function booleanAttrs(attributes, fields) {
  if (Array.isArray(fields) && fields.length > 0) {
    fields.forEach((field) => {
      attributes[`${field}`] = {
        type: 'boolean',
        default: false,
      }
    });
    return attributes;
  }
}