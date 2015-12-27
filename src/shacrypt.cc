#include <node.h>
#include <v8.h>
#include <nan.h>

#include "sha256crypt.h"
#include "sha512crypt.h"

using namespace v8;
using namespace node;

NAN_METHOD(sha256crypt) {
  Nan::Utf8String key(info[0]);
  Nan::Utf8String salt(info[1]);

  info.GetReturnValue().Set(Nan::New(sha256_crypt(*key, *salt)).ToLocalChecked());
}

NAN_METHOD(sha512crypt) {
  Nan::Utf8String key(info[0]);
  Nan::Utf8String salt(info[1]);

  info.GetReturnValue().Set(Nan::New(sha512_crypt(*key, *salt)).ToLocalChecked());
}

NAN_MODULE_INIT(init) {
  Nan::Set(target, Nan::New("sha256crypt").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(sha256crypt)).ToLocalChecked());
  Nan::Set(target, Nan::New("sha512crypt").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(sha512crypt)).ToLocalChecked());
}

NODE_MODULE(shacrypt, init);

