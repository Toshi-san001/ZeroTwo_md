module.exports = {
	name: "Dismiss",
	alias: ["dme", "member"],
	category: "group",
	desc: "Owner can Demote admin group",
	use: "<tag admin>",
	isGroup: true,
        isOwner: true,
        noPrefix: true,
	isBotAdmin: true,
	isAdmin: false,
	async run({ msg, conn }) {
		const mm = msg.quoted ? [msg.quoted.sender] : msg.mentions;
		for (let i of mm) await conn.groupParticipantsUpdate(msg.from, [i], "demote");
		await msg.reply("Admin Demoted Successfully ✅");
	},
};
