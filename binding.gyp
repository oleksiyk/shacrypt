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
      'conditions': [
        ['OS=="mac"', {
          'xcode_settings': {
            'MACOSX_DEPLOYMENT_TARGET': '10.9',
            'OTHER_CFLAGS': [
              '-stdlib=libc++',
            ],
          }
        }],
      ],
    }
  ],

  "cflags": [
	'-Wall',
	'-O3'
  ]
}
