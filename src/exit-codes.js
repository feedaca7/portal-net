// Error code enumeration.
const EXIT_CODE_SUCCESS = 0x0000_0000;
const EXIT_CODE_GENERIC = 0x0000_0001;
const EXIT_CODE_INVALID_SUBCOMMAND = 0x0000_0002;
const EXIT_CODE_INVALID_SUBCOMMAND_ACTION = 0x0000_0003;

module.exports = {
    EXIT_CODE_SUCCESS,
    EXIT_CODE_GENERIC,
    EXIT_CODE_INVALID_SUBCOMMAND,
    EXIT_CODE_INVALID_SUBCOMMAND_ACTION
};
