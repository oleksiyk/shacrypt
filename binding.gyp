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
            'MACOSX_DEPLOYMENT_TARGET': '10.7',
            'GCC_VERSION': 'com.apple.compilers.llvm.clang.1_0',
            'CLANG_CXX_LANGUAGE_STANDARD': 'gnu++1y',  # -std=gnu++1y
            'CLANG_CXX_LIBRARY': 'libc++',
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
