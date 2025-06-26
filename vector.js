/**
 * GiocapsulaVector - 2D Vector Utility
 * Author: Giocapsula
 * License: Custom
 */

class GiocapsulaVector {
    /**
     * Creates a 2D vector.
     * @param {number} x - X component.
     * @param {number} y - Y component.
     */
    constructor(x = 0, y = 0) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw new Error('[GiocapsulaVector] Coordinates must be numbers.');
        }
        this.x = x;
        this.y = y;
    }

    /**
     * Adds another vector to this one.
     * @param {GiocapsulaVector} other - The vector to add.
     */
    add(other) {
        if (!(other instanceof GiocapsulaVector)) {
            console.error('[GiocapsulaVector] Invalid vector.');
            return;
        }
        this.x += other.x;
        this.y += other.y;
    }

    /**
     * Calculates the magnitude of the vector.
     * @returns {number}
     */
    magnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    /**
     * Returns a copy of this vector.
     * @returns {GiocapsulaVector}
     */
    clone() {
        return new GiocapsulaVector(this.x, this.y);
    }
}

// Example usage:
// const v1 = new GiocapsulaVector(3, 4);
// console.log(v1.magnitude()); // Output: 5
// const v2 = new GiocapsulaVector(1, 2);
// v1.add(v2);
// console.log(v1); // Output: GiocapsulaVector { x: 4, y: 6 }

module.exports = GiocapsulaVector;
