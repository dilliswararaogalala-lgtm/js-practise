| Input (Bencoded String)          | Expected Output (JavaScript Data) |
| :------------------------------: | :-------------------------------: |
| `"i123e"`                        | `123`                             |
| `"i-42e"`                        | `-42`                             |
| `"i0e"`                          | `0`                               |
| `"5:hello"`                      | `"hello"`                         |
| `"0:"`                           | `""`                              |
| `"11:hello world"`               | `"hello world"`                   |
| `"14:special!@#$chars"`          | `"special!@#$chars"`              |
| `"l5:applei123el6:bananai-5eee"` | `["apple", 123, ["banana", -5]]`  |
| `"le"`                           | `[]`                              |
| `"li0e0:l4:testee"`              | `[0, "", ["test"]]`               |
| `"l0:i0ele"`                     | `["", 0, []]`                     |
| `"l3:onel3:twol5:threeeee"`      | `["one", ["two", ["three"]]]`     |
