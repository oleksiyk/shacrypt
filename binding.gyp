{
  "targets": [
    {
      "target_name": "shacrypt",
      "sources": [ 
      	"src/sha256crypt.c",
      	"src/sha512crypt.c",
      	"src/shacrypt.cc" 
      ]
    }
  ],

  "cflags": [
	'-Wall',
	'-O3'
  ]
}
