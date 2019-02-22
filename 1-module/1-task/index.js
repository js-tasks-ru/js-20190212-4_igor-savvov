/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
  return n !== 0 ? m * pow(m, n - 1) : 1;
}