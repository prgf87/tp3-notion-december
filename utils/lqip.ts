'use strict';

import sharp from 'sharp';
import pMap from 'p-map';

/**
 * @name lqipModern
 *
 * @param {Buffer|string|Buffer[]|string[]} input - Either an array of image inputs or a single image input.
 * Each image input may either be a `Buffer` containing raw image data, or a `string` containing the filesystem path to a supported image type.
 * @param {Object} [opts] - Optional configuration options.
 * @param {number} [opts.concurrency=4] - Concurrency when processing an array of input images.
 * @param {string} [opts.outputFormat='webp'] - Output format to use; either `webp` or `jpeg` (passing `jpg` is the same as passing `jpeg`).
 * @param {Object} [opts.outputOptions] - Output options passed to either `sharp.webp` or `sharp.jpeg` dependent on `opts.outputFormat`.
 * @param {number|any[]} [opts.resize] - Options to pass to `sharp.resize`. Defaults to resizing inputs to a max dimension of `16`, with the other dimension being calculated to maintain aspect ratio. If you want more control, you can pass an array of args here which will be forwarded to `sharp.resize`.
 */
type Input = { input: Buffer | string | Buffer[] | string[] };

export async function lqipModern(
  input: Buffer | string | Buffer[] | string[],
  opts: {
    concurrency?: number;
    outputFormat?: string;
    outputOptions?: object;
    resize?: number | any[];
  } = {}
): Promise<
  | {
      content: any;
      metadata: {
        originalWidth: any;
        originalHeight: any;
        width: any;
        height: any;
        type: any;
        dataURIBase64: string;
      };
    }
  | {
      content: any;
      metadata: {
        originalWidth: any;
        originalHeight: any;
        width: any;
        height: any;
        type: any;
        dataURIBase64: string;
      };
    }[]
> {
  const { concurrency = 4, ...rest } = opts;

  if (Array.isArray(input)) {
    return pMap(
      input as any,
      async (image) => computeLqipImage(image as any, rest),
      {
        concurrency,
      }
    );
  } else {
    return computeLqipImage(input as any, opts);
  }
}

async function computeLqipImage(input: Input, opts = {}) {
  const { resize = 16, outputFormat = 'webp', outputOptions }: any = opts;

  const image = sharp(input as any).rotate();
  const metadata = await image.metadata();

  const resized = image.resize(
    ...(Array.isArray(resize)
      ? resize
      : [
          Math.min(metadata.width as number, resize),
          Math.min(metadata.height as number, resize),
          { fit: 'inside' },
        ])
  );
  let output;

  if (outputFormat === 'webp') {
    output = resized.webp({
      quality: 20,
      alphaQuality: 20,
      smartSubsample: true,
      ...outputOptions,
    });
  } else if (outputFormat === 'jpg' || outputFormat === 'jpeg') {
    output = resized.jpeg({
      quality: 20,
      ...outputOptions,
    });
  } else {
    throw new Error(`Invalid outputformat "${outputFormat}"`);
  }

  const { data, info } = await output.toBuffer({ resolveWithObject: true });

  return {
    content: data,
    metadata: {
      originalWidth: metadata.width,
      originalHeight: metadata.height,
      width: info.width,
      height: info.height,
      type: outputFormat,
      dataURIBase64: `data:image/webp;base64,${data.toString('base64')}`,
    },
  };
}
