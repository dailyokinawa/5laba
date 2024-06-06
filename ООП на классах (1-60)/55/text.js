"use strict";

class Text {
    constructor(text) {
        this.text = text;
    }

    getCharacterCount() {
        return this.text.length;
    }

    getLetterCount() {
        return this.text.replace(/[^a-zA-Zà-ÿÀ-ß]/g, "").length;
    }

    getSpaceCount() {
        return (this.text.match(/\s/g) || []).length;
    }

    getNonSpaceCharacterCount() {
        return this.text.replace(/\s/g, "").length;
    }

    getWords() {
        return this.text.match(/\b[\wà-ÿÀ-ß']+\b/g) || [];
    }

    getSentences() {
        return this.text.match(/[^.!?]+[.!?]/g) || [];
    }
}

const sampleText = new Text("My name is peter.");
console.log(sampleText.getCharacterCount());
console.log(sampleText.getLetterCount());
console.log(sampleText.getSpaceCount());
console.log(sampleText.getNonSpaceCharacterCount());
console.log(sampleText.getWords());
console.log(sampleText.getSentences());   