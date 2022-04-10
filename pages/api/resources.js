import { collection, doc, getDocs } from 'firebase/firestore';
import { app, db } from '../../src/lib/firebaseConfig';

export default function handler(req, res) {
	const dbInstance = collection(db, 'resources');
	getDocs(dbInstance).then((data) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(
			JSON.stringify(
				data.docs.map((doc) => {
					return { ...doc.data(), id: doc.id };
				})
			)
		);
	});
}
