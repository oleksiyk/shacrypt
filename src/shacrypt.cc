#include <node.h>
#include <v8.h>

#include "sha256crypt.h"
#include "sha512crypt.h"

using namespace v8;

Handle<Value> sha256crypt(const Arguments& args) {
  HandleScope scope;

  v8::String::Utf8Value key(args[0]);
  v8::String::Utf8Value salt(args[1]);

  return scope.Close(String::New( sha256_crypt(*key, *salt)));
}

Handle<Value> sha512crypt(const Arguments& args) {
  HandleScope scope;

  v8::String::Utf8Value key(args[0]);
  v8::String::Utf8Value salt(args[1]);

  return scope.Close(String::New( sha512_crypt(*key, *salt)));
}

void init(Handle<Object> target) {
	NODE_SET_METHOD(target, "sha256crypt", sha256crypt);
	NODE_SET_METHOD(target, "sha512crypt", sha512crypt);
}

NODE_MODULE(shacrypt, init);

