import crypto from "crypto";
import { serialize } from "php-serialize";

interface RequestBody {
  p_signature: string;
  [key: string]: any;
}

// this function takes in the entirety of the Paddle request body, gets the
// p_signature and verifies it against the public key
export const validatePaddleWebhook = ({
  webhookData,
  publicKey,
}: {
  webhookData: RequestBody;
  publicKey: string;
}) => {
  // extract the signature from the remainder of the payload
  // the signature actually signs the remainder
  const { p_signature, ...otherProps } = webhookData || {};

  // sort by key (asciibetical)
  // also be sure to convert any numbers into strings
  const sorted: any = {};
  for (const k of Object.keys(otherProps).sort()) {
    const v = otherProps[k];
    sorted[k] = v == null ? null : v.toString();
  }

  // PHP-style serialization to utf8 format string
  const serialized = serialize(sorted);

  // initialise a Verify instance
  const verifier = crypto.createVerify("sha1");
  verifier.update(serialized);
  verifier.end();

  // verify but don't propagate exceptions,. Any errors (such as a malformed
  // public key) are considered false for our purposes. We are not interested
  // in reporting 'why' the validation failed.
  try {
    return verifier.verify(publicKey, p_signature, "base64");
  } catch (err) {
    console.error(err);
    return false;
  }
};
