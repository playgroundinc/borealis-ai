export default function DefaultAttrs(fields, source = null) {
    const attributes = {};
    if (Array.isArray(fields) && fields.length > 0) {
        fields.forEach((field) => {
            attributes[`${field}`] = {
                type: 'string',
                default: '',
            }
            if (source) {
                attributes[`${field}`]['source'] = source;
                attributes[`${field}`]['meta'] = field;
            }
        });
        return attributes;
    }
}
