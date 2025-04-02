export type TFieldValidator = {
    isValid: (value: string | Date | number | undefined) => void,
    errors: string[],
}

export const usernameValidator: TFieldValidator = {
    isValid: function(this:TFieldValidator, value) {
        if (!value) {
            this.errors.push('Es darf nicht Null sein!');
        }
        const username = value as string;

        if (username.length < 3) {
            this.errors.push('Es muss mindestens 3 Zeichen lang sein!');
        }
        if (username.length > 28) {
            this.errors.push('Es darf hochstens 28 Zeichen lang sein!');
        }
        const unallowedChars = new RegExp(/[\^'"|*&/`~ *]+/);
        if (username.match(unallowedChars)) {
            const suggestedName = username.replace(' ', '_').replace(unallowedChars, '');
            this.errors.push(`Keine ^'"/*\`| oder Leerzeichen. Vielleicht ${suggestedName}?`);
        }
    },
    errors: [],
};
export const emailValidator: TFieldValidator = {
    isValid: function(this:TFieldValidator, value) {
        if (!value) {
            this.errors.push('Es darf nicht Null sein!');
        }
        const email = value as string;

        if (email.length < 3) {
            this.errors.push('Es muss mindestens 3 Zeichen lang sein!');
        }
        if (email.length > 45) {
            this.errors.push('Es darf hochstens 45 Zeichen lang sein!');
        }
        const validEmail = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
        if (!email.match(validEmail)) {
            this.errors.push('Das Email-Addresse nicht passen!');
        }
    },
    errors: [],
};
export const passwordValidator: TFieldValidator = {
    isValid: function(this:TFieldValidator, value) {
        if (!value) {
            this.errors.push('Es darf nicht Null sein!');
        }
        const password = value as string;

        if (password.length < 3) {
            this.errors.push('Es muss mindestens 3 Zeichen lang sein!');
        }
        if (password.length > 28) {
            this.errors.push('Es darf hochstens 28 Zeichen lang sein!');
        }
        const validLength = new RegExp(/\S{8,}/);
        const uppercase = new RegExp("[A-Z]+");
        const lowercase = new RegExp("[a-z]+");
        const digit = new RegExp("[0-9]+");
        const specialChar = new RegExp("[#?!@$%^&*-]+");

        if (!password.match(validLength)) {
            this.errors.push(`Es muss mindestens 8 Zeichen lang sein.`);
        }
        if (!password.match(uppercase)) {
            this.errors.push(`Es muss mindestens 1 Grossbuchstabe enthalten.`);
        }
        if (!password.match(lowercase)) {
            this.errors.push(`Es muss zumindest 1 Kleinbuchstabe enthalten.`);
        }
        if (!password.match(digit)) {
            this.errors.push(`Es muss mindestens eine Zahl enthalten.`);
        }
        if (!password.match(specialChar)) {
            this.errors.push(`Mindestens ein Sonderzeichen ist erforderlich.`);
        }
    },
    errors: [],
};


