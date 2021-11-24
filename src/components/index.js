//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

const { Children } = require("react");
function contain(a, b) {
	let ans = {};
	let child = {};
	let flag = 0;
	let t1 = a.top ? parseInt(a.top) : 0;
	let b1 = a.bottom ? parseInt(a.bottom) : 0;
	let l1 = a.left ? parseInt(a.left) : 0;
	let r1 = a.right ? parseInt(a.right) : 0;
	let h1 = a.height ? parseInt(a.height) : 0;
	let w1 = a.width ? parseInt(a.width) : 0;

	let t2 = b.top ? parseInt(b.top) : 0;
	let b2 = b.bottom ? parseInt(b.bottom) : 0;
	let l2 = b.left ? parseInt(b.left) : 0;
	let r2 = b.right ? parseInt(b.right) : 0;
	let h2 = b.height ? parseInt(b.height) : 0;
	let w2 = b.width ? parseInt(b.width) : 0;

	if (t2 >= t1 && l2 >= l1 && r2 >= r1 && b2 >= b1) {
		if ((a.height && (t1 + h1 >= t2 + h2 && b1 + h1 >= b2 + h2) &&
			(l1 + w1 >= l2 + w2 && r1 + w1 >= r2 + w2)) ||
			(!a.height)
		) {
			if (a.top) {
				child.top = `${t2 - t1}px`;
			}
			if (a.left) {
				child.left = `${l2 - l1}px`;
			}
			if (a.bottom) {
				child.bottom = `${b2 - b1}px`;
			}
			if (a.right) {
				child.right = `${r2 - r1}px`;
			}
			if (a.height) {
				child.height = `${h2}px`;
				child.width = `${w2}px`;
			}
			ans = { ...a, children: [{ ...child, children: [] }] };
			flag = 1;
		}

	}
	if (flag === 0) {
		return -1;
	}
	return ans;
}
function updateStructure(rec1, rec2) {
	let res = contain(rec1, rec2);
	if (res !== -1) {
		return res;
	}
	res = contain(rec2, rec1);
	if (res !== -1) {
		return res;
	}
	return rec1;
	//write your code
}

module.exports = updateStructure;
