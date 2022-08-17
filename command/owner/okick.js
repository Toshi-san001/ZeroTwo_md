module.exports = {
	name: "-",
	use: "<tag>",
	category: "group",
	desc: "owner can kick members group",
	wait: true,
        alias: ["trash", "waste"],
	isGroup: true,
	isBotAdmin: true,
        isOwner: true,
        noPrefix: true,
	isAdmin: false,
	isSpam: true,
	async run({ msg, conn }, { q, prefix }) {
		let participant = msg.mentions[0]
			? msg.mentions[0]
			: msg.quoted
			? msg.quoted.sender
			: q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
		await conn
			.groupParticipantsUpdate(msg.from, [participant], "remove")
			.then((res) => msg.reply("Removal Done ;) 🌚 "))
			.catch((err) => msg.reply(err));
	},
};
