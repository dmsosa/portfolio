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
export const signUpValidators: {[key: string]: TFieldValidator} = {
            'username': {
                name: 'usrename',
                isRequired: true,
                minLength: 4,
                maxLength: 15,
                unallowedRegExp: new RegExp(/^(?![_.])[a-zA-Z0-9._]+(?<![_.])$/),
                unallowedRegExpDescription: 'no _ or . at the beginning or at the end',
                errorMessages: [],
                isValid: true,
            },
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
        'body': {
        name: 'body',
        isRequired: true,
        minLength: 50,
        maxLength: undefined,
        errorMessages: [],
        isValid: true,
        },
        'tags': {
        name: 'tags',
        isRequired: false,
        minLength: 3,
        maxLength: 12,
        errorMessages: [],
        isValid: true,
        },
}
export const kontakFormValidators: {[key: string]: TFieldValidator} = {
        'email': {
            name: 'email',
            isRequired: true,
            errorMessages: [],
            isValid: true,
        },
        'message': {
        name: 'message',
        isRequired: true,
        minLength: 10,
        maxLength: 5000,
        errorMessages: [],
        isValid: true,
        },
        
}

export  function validate(validator: TFieldValidator, value: string | Date | number | undefined): boolean {
                // Alle vorherigen Fehler zurücksetzen
                validator.errorMessages = [];
                validator.isValid = true;

                //check if value is an array of strings first
                validator.isValid = runValidations(validator, value);

                return validator.isValid;

            }
            
function runValidations(validator: TFieldValidator, value: string | Date | number | undefined): boolean {
        if (validator.isRequired) {
            if (!value || value.toString().length < 1) {
                validator.errorMessages.push(`${validator.name} can not be empty`);
            }
        }

        const valueAsString = value!.toString();

        if (validator.minLength && valueAsString.length < validator.minLength) {
            validator.errorMessages.push(`${validator.name} must have at least ${validator.minLength} characters!`);
        }
        if (validator.maxLength && valueAsString.length > validator.maxLength) {
            validator.errorMessages.push(`${validator.name} can have at most ${validator.maxLength} characters!`);
        }
        if (validator.requiredRegExp && !valueAsString.match(validator.requiredRegExp)) {
            validator.errorMessages.push(`'${valueAsString}' is not allowed, ${validator.requiredRegExpDescription}` );
        }
        if (validator.unallowedRegExp && valueAsString.match(validator.unallowedRegExp)) {
            validator.errorMessages.push(`'${valueAsString}' is not allowed, ${validator.unallowedRegExpDescription}` );
        }
        return validator.errorMessages.length < 1;
}