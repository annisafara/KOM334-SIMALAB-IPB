import requests

def login_mahasiswa(username, password):
	r = requests.post('http://api.ipb.ac.id/v1/Authentication/LoginMahasiswa',
			headers={'X-IPBAPI-Token': 'Bearer 6454b1ff-7dce-396d-9b07-4f88248072b6'},
			json={'userName': username, 'password': password})
	res = r.json()
	if 'Error' not in res:
		return res
	else:
		return None

def login_admin_lab(username, password):
	return None