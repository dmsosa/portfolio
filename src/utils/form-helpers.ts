export type TFieldValidator = {
    name: string,
    isRequired?: boolean,
    minLength?: number,
    maxLength?: number,
    requiredRegExp?: RegExp,
    requiredRegExpDescription?: string,
    unallowedRegExp?: RegExp,
    unallowedRegExpDescription?: string,
    errorMessages: string[],
    isValid: boolean,
}

export const loginValidators: {[key: string]: TFieldValidator} = {
            'email': {
                name: 'email',
                isRequired: true,
                minLength: 4,
                maxLength: undefined,
                errorMessages: [],
                isValid: true,
                },
            'password': {
                name: 'password',
                isRequired: true,
                minLength: 4,
                maxLength: 28,
                requiredRegExp: new RegExp(/[\^'"|*&/`~ *]+/),
                requiredRegExpDescription: `At least one special character: [#?!@$%^&*-]+^'"/*\`|, No empty spaces, At least one uppercase letter, At least one lowercase letter, At least a digit`,
                errorMessages: [],
                isValid: true,
                },
}


export const artikelValidators: {[key: string]: TFieldValidator} = {
        'title': {
            name: 'title',
            isRequired: true,
            minLength: 6,
            maxLength: 28,
            errorMessages: [],
            isValid: true,
        },
        'description': {
            name: 'description',
            isRequired: true,
            minLength: 10,
            maxLength: 5000,
            errorMessages: [],
            isValid: true,
            },
}

export  function validate(validator: TFieldValidator, value: string | Date | number | undefined | string[]): boolean {
                // Alle vorherigen Fehler zurücksetzen
                validator.errorMessages = [];
                validator.isValid = true;
                if (!value && validator.isRequired) {
                    validator.errorMessages.push('Es darf nicht Null sein!');
                }
                //check if value is an array of strings first
                if (value && Array.isArray(value)) {
                    const valueAsArray = value as string[];
                    for (let i = 0; i < valueAsArray.length; i++) {
                        const valueAsString = valueAsArray[i];
                        validator.isValid = runValidations(validator, valueAsString);
                    }
                } else if (value) {
                    const valueAsString = value as string;
                    validator.isValid = runValidations(validator, valueAsString);
                }
                return validator.isValid;

            }
            
function runValidations(validator: TFieldValidator, valueAsString: string): boolean {
        if (validator.minLength && valueAsString.length < validator.minLength) {
            validator.errorMessages.push('Es muss mindestens 3 Zeichen lang sein!');
        }
        if (validator.maxLength && valueAsString.length > validator.maxLength) {
            validator.errorMessages.push('Es darf hochstens 28 Zeichen lang sein!');
        }
        if (validator.requiredRegExp && !valueAsString.match(validator.requiredRegExp)) {
            validator.errorMessages.push(`The value ${valueAsString} is not allowed, ${validator.requiredRegExpDescription}` );
        }
        if (validator.unallowedRegExp && valueAsString.match(validator.unallowedRegExp)) {
            validator.errorMessages.push(`The value ${valueAsString} is not allowed, ${validator.unallowedRegExpDescription}` );
        }
        return validator.errorMessages.length < 1;
}