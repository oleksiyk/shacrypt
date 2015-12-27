{
  "targets": [
    {
      "target_name": "shacrypt",
      "sources": [
      	"src/sha256crypt.c",
      	"src/sha512crypt.c",
      	"src/shacrypt.cc"
      ],
      'include_dirs': [
        'deps/libmagic/src',
        "<!(node -e \"require('nan')\")"
      ],
    }
  ],

  "cflags": [
	'-Wall',
	'-O3'
  ]
}
