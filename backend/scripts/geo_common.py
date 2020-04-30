# Cruz Jean
# common submodule for parsing/reformatting raw export arc data from points to geometry

import openpyxl as xl

def getxys(path, override_last=False):
	fin = xl.load_workbook(path)
	xys = {}
	
	i = iter(fin.active)
	next(i)
	for row in i:
		id = row[1].value
		item = xys.get(id)
		if item is None:
			_id = int(id.split('_')[-1])
			item = (_id, int(row[2].value), [])
			xys[id] = item
		item[2].append(f"{row[3].value} {row[4].value}")
	
	fin.close()
	if override_last:
		for v in xys.values():
			v[2][len(v[2])-1] = v[2][0]
	
	return xys

def points_to_geometry(type, in_path, out_path=None, override_last=False, open_delim='(', close_delim=')'):
	if out_path is None:
		out_path = in_path[:in_path.rfind('.')] + '-out.xlsx'
	
	xys = getxys(in_path, override_last)
	fout = xl.Workbook()
	ws = fout.active
	
	print('geometries:', len(xys))
	ws.append(['uniqueid', 'ORIG_FID', 'geometry'])
	for k,v in xys.items():
		vals = f"{type}{open_delim}{', '.join(v[2])}{close_delim}"
		ws.append([v[0], v[1], vals])
	
	fout.save(out_path)
	print('export completed')
	return xys
