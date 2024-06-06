"use strict";
class Store {
    constructor() {
        this.data = {};
    }

    set(key, value) {
        const keys = key.split('.');
        let current = this.data;

        keys.slice(0, -1).forEach(k => {
            if (!current[k]) current[k] = {};
            current = current[k];
        });

        current[keys[keys.length - 1]] = value;
    }

    get(key) {
        const keys = key.split('.');
        let current = this.data;

        for (const k of keys) {
            if (current[k] === undefined) return undefined;
            current = current[k];
        }

        return current;
    }

    update(key, value) {
        if (this.get(key) !== undefined) {
            this.set(key, value);
        } else {
            throw new Error(`Key ${key} does not exist.`);
        }
    }

    delete(key) {
        const keys = key.split('.');
        let current = this.data;

        keys.slice(0, -1).forEach(k => {
            if (current[k] === undefined) return;
            current = current[k];
        });

        delete current[keys[keys.length - 1]];
    }
}