import csv
import json

with open("/home/daniele/Documents/2023/neuro/files/glossario_tot.tsv", "r") as f:
    csv_reader = csv.reader(f, delimiter="\t")
    a = []
    for r in csv_reader:
        i = {
            "id": r[0],
            "name_eng": r[1],
            "desc_eng": r[2],
            "name_ita": r[3],
            "desc_ita": r[4]
        }
        a.append(i)
    with open("/home/daniele/Documents/2023/neuro/files/test.json", 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(a, indent=4))
    