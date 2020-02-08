import json
with open("zips.json") as f:
    contents = json.loads(f.read())

def is_int(s):
    try:
        int(s)
        return True
    except ValueError:
        return False

print(len(list(filter(is_int, contents.values()))))
