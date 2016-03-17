editor = new $.fn.dataTable.Editor ({
	table: '#area_roles',
	idSrc: 'id',
	data: [ {
		id: 'id'
	}],
	fields: [ {
		name: 'id',
		type: 'hidden'
	}, {
		name: 'members_min',
		label: "Min. members",
		type: 'slider',
		options: [
			{ label: 'type', value: 'single'},
			{ label: 'min', value: 0},
			{ label: 'max', value: 25},
			{ label: 'grid', value: true },
			{ label: 'step', value: 1 },

		]
	},  {
		name: 'members_max',
		label: "Max members",
		type: 'slider',
		options: [
			{ label: 'type', value: 'single'},
			{ label: 'min', value: 0},
			{ label: 'max', value: 25},
			{ label: 'grid', value: true },
			{ label: 'step', value: 1 },

		]
	}
	]
});
