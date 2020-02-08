import json

with open("states.min.json") as f:
    contents = f.read()

contents = json.loads(contents)
zips = {}
for state in contents:
    for city in contents[state]["cities"]:
        for zip_code in contents[state]["cities"][city]:
            zips[int(zip_code)] = f"{city}" # , {state}""

zips_json = json.dumps(zips)

with open("zips.json", "w") as f:
    f.write(zips_json)

