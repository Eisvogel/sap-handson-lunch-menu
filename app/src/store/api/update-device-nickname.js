export default axios => async ({piDbId, userId, nickname}) => {
	await axios.post('/xsjs/pis_mgmt.xsjs', {
		Command: 'addPiNickname',
		PiNickname: nickname || '',
		UserID: userId,
		PiID: piDbId
	});
}
