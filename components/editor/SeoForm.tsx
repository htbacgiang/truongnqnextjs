import { ChangeEventHandler, FC, useEffect, useState } from "react";
import classnames from "classnames";
import slugify from "slugify";

export interface SeoResult {
  meta: string;
  slug: string;
  tags: string;
  category: string;
}

interface Props {
  initialValue?: SeoResult;
  title?: string;
  onChange(result: SeoResult): void;
}

const commonInput =
  "w-full bg-transparent outline-none border-2 border-secondary-dark focus:border-primary-dark focus:dark:border-primary rounded transition text-dark dark:text-primary p-2";

const SEOForm: FC<Props> = ({
  initialValue,
  title = "",
  onChange,
}): JSX.Element => {
  const [values, setValues] = useState<SeoResult>({
    meta: "",
    slug: "",
    tags: "", // Added tags to initial state
    category: "",
  });

  const handleChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
  > = ({ target }) => {
    let { name, value } = target;
    if (name === "meta") value = value.substring(0, 250);
    const newValues: SeoResult = { ...values, [name]: value };
    setValues(newValues);
    onChange(newValues);
  };

  useEffect(() => {
    const slug = slugify(title.toLowerCase(), {
      strict: true,
    });
    const newValues: SeoResult = { ...values, slug };
    setValues(newValues);
    onChange(newValues);
  }, [title]);

  useEffect(() => {
    if (initialValue) {
      setValues({
        ...initialValue,
        slug: slugify(initialValue.slug, {
          strict: true,
        }),
      });
    }
  }, [initialValue]);

  const { meta, slug, category } = values;

  return (
    <div className="space-y-4">
      <h3 className="text-dark dark:text-white text-xl font-semibold">
        Tối ưu SEO
      </h3>
      <label className="block relative">
        <span className="text-sm font-semibold text-primary-dark dark:text-white">
          Danh mục:
        </span>
        <select
          name="category"
          value={category}
          onChange={handleChange}
          className={classnames(commonInput, "mt-2")}
        >
          <option value="" disabled>
            Chọn một danh mục
          </option>
          <option value="Thiết kế Website">Thiết kế Website</option>
          <option value="SEO & Tối ưu website">SEO & Tối ưu website</option>
          <option value="Marketing bền vững">Marketing bền vững</option>
          <option value="Chuyện của Trường">Chuyện của Trường</option>
        </select>
      </label>
      <Input
        value={slug}
        onChange={handleChange}
        name="slug"
        placeholder="Tối ưu đường dẫn"
        label="Slug: "
      />

      <div className="relative">
        <textarea
          name="meta"
          value={meta}
          onChange={handleChange}
          className={classnames(commonInput, "text-lg h-20 resize-none")}
          placeholder="Meta description 160-200 ký tự thì ok"
        ></textarea>
        <p className="absolute bottom-3 right-3 text-dark dark:text-white text-sm">
          {meta.length}/250
        </p>
      </div>
    </div>
  );
};

const Input: FC<{
  name?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}> = ({ name, value, placeholder, label, onChange }) => {
  return (
    <label className="block relative">
      <span className="absolute top-1/2 -translate-y-1/2 text-sm font-semibold text-primary-dark dark:text-white pl-2">
        {label}
      </span>

      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        className={classnames(commonInput, "italic pl-10")}
        onChange={onChange}
      />
    </label>
  );
};

export default SEOForm;