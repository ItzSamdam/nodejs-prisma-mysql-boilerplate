const SuperDaom = require('./SuperDaom');
const PrismaClient = require('@prisma/client');

const Token = new PrismaClient().token;

class TokenDaom extends SuperDaom {
    constructor() {
        super(Token);
    }

    async findOne(where) {
        return Token.findOne({ where });
    }

    async remove(where) {
        return Token.destroy({ where });
    }
}

module.exports = TokenDaom;
