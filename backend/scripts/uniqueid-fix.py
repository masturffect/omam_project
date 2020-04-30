#!/usr/bin/env python

# Cruz Jean
# fixed uniqueid column in POINTS_OMAM_OR_...

import sys
import openpyxl as xl

def extr(row):
	return [i.value for i in row]

def fix(in_path, out_path = None):
	if out_path is None:
		out_path = in_path[:in_path.rfind('.')] + '-out.xlsx'
	
	fin = xl.load_workbook(in_path)
	fout = xl.Workbook()
	ws = fout.active
	
	i = iter(fin.active)
	ws.append(extr(next(i)))
	for row in i:
		r = extr(row)
		r[0] = int(r[0].split('_')[-1])
		ws.append(r)
	
	fout.save(out_path)
	fin.close()
	
if len(sys.argv) == 1:
	p = input('enter input path: ')
	fix(p)
elif len(sys.argv) == 2:
	fix(sys.argv[1])
elif len(sys.argv) == 3:
	fix(sys.argv[1], sys.argv[2])
else:
	print(f"usage: {sys.argv[0]} (input) (output)")