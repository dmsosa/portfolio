export type TFieldValidator = {
    isValid: (value: string | Date | number | undefined | string[]) => boolean,
    errors: string[],
}

export const usernameValidator: TFieldValidator = {
    isValid: function(this:TFieldValidator, value) {
        this.errors = [];
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
        return this.errors.length < 1;
    },
    errors: [],
};
export const emailValidator: TFieldValidator = {
    isValid: function(this:TFieldValidator, value) {
        this.errors = [];
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
        return this.errors.length < 1;
    },
    errors: [],
};
export const passwordValidator: TFieldValidator = {
    isValid: function(this:TFieldValidator, value) {
        this.errors = [];
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
        return this.errors.length < 1;
    },
    errors: [],
};



const formValidator: {[key:string]: TFieldValidator} = {
    username: {isValid: function(this:TFieldValidator, value) {
        this.errors = [];
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
        return this.errors.length < 1;
    },
    errors: []},
    email: {isValid: function(this:TFieldValidator, value) {
        this.errors = [];
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
        return this.errors.length < 1;

    },
    errors: []},
    password: {isValid: function(this:TFieldValidator, value) {
        this.errors = [];
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
        return this.errors.length < 1;

    },
    errors: []},
    bio: {isValid: function(this:TFieldValidator, value) {
        this.errors = [];
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
        return this.errors.length < 1;

    },
    errors: []},
    title: {isValid: function(this:TFieldValidator, value) {
        this.errors = [];
        if (!value) {
            this.errors.push('Es darf nicht Null sein!');
        }
        const title = value as string;

        if (title.length < 3) {
            this.errors.push('Es muss mindestens 3 Zeichen lang sein!');
        }
        if (title.length > 28) {
            this.errors.push('Es darf hochstens 28 Zeichen lang sein!');
        }
        const unallowedChars = new RegExp(/[\^'"|*&/`~ *]+/);
        if (title.match(unallowedChars)) {
            this.errors.push(`Keine ^'"/*\`| oder Leerzeichen fur die Titel '${title}'`);
        }
        return this.errors.length < 1;

    },
    errors: []},
    description: {isValid: function(this:TFieldValidator, value) {
        this.errors = [];
        if (!value) {
            this.errors.push('Es darf nicht Null sein!');
        }
        const description = value as string;

        if (description.length < 10) {
            this.errors.push('Es muss mindestens 10 Zeichen lang sein!');
        }
        if (description.length > 500) {
            this.errors.push('Es darf hochstens 500 Zeichen lang sein!');
        }
        return this.errors.length < 1;

    },
    errors: []},
    body: {isValid: function(this:TFieldValidator, value) {
        this.errors = [];
        if (!value) {
            this.errors.push('Es darf nicht Null sein!');
        }
        const body = value as string;

        if (body.length < 25) {
            this.errors.push('Es muss mindestens 3 Zeichen lang sein!');
        }
        return this.errors.length < 1;

    },
    errors: []},
    tags: {isValid: function(this:TFieldValidator, value) {
        this.errors = [];
        if (!value) {
            this.errors.push('Es darf nicht Null sein!');
        }
        const tags = value as string[];

        for (const tag of tags) {
            if (tag.length < 3) {
            this.errors.push('Es muss mindestens 3 Zeichen lang sein!');
        }
        if (tag.length > 28) {
            this.errors.push('Es darf hochstens 28 Zeichen lang sein!');
        }
        const unallowedChars = new RegExp(/[\^'"|*&/`~ *]+/);
        if (tag.match(unallowedChars)) {
            this.errors.push(`Keine ^'"/*\`| oder Leerzeichen fur tags: ${tag}`);
        }
        }
        
        return this.errors.length < 1;

    },
    errors: []},
}

export class FormChecker { 
    isValid: boolean = true; 
    fieldErrorMessages: {[key:string]: string[]} = { "title": [], "description": [], "body": [], "tags": [] };
    cleanErrors() {
        this.isValid = true;
        this.fieldErrorMessages = { "title": [], "description": [], "body": [], "tags": [] };
    }
    constructor() {

    }
};
export function checkFormErrors(form: {[key:string]: string | number | Date | string[] }): FormChecker {
    const formChecker = new FormChecker();
    formChecker.cleanErrors();
    for (const [key, value] of Object.entries(form)) {
        console.log(`${key}: ${value}`);
        if (!formValidator[key].isValid(value)) {
            formChecker.fieldErrorMessages[key] = formValidator[key].errors;
            formChecker.isValid = false;
        }
    }
    return formChecker;
}
