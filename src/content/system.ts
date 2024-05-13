import * as z from "zod";


export const RatingSchema = z.enum([
    "low",
]);
export type Rating = z.infer<typeof RatingSchema>;

export const SystemCommunitySchema = z.object({
    "github_stars": z.number().optional(),
    "first_release_date": z.number().optional(),
    "lastest_release_date": z.number().optional(),
    "developer_activity": z.string().optional(),
    "notable_users": z.array(z.string()).optional(),
});
export type SystemCommunity = z.infer<typeof SystemCommunitySchema>;

export const CompanySchema = z.object({
    "name": z.string().optional(),
    "investments": z.number().optional(),
    "investors": z.array(z.string()).optional(),
});
export type Company = z.infer<typeof CompanySchema>;

export const FeaturesSchema = z.object({
    "serverless": z.boolean().optional(),
    "replay": z.boolean().optional(),
    "push_activities": z.boolean().optional(),
    "pull_activities": z.boolean().optional(),
    "http_proxy": z.boolean().optional(),
    "test_without_server": z.boolean().optional(),
});
export type Features = z.infer<typeof FeaturesSchema>;

export const PerformanceSchema = z.object({
    "scaling_method": z.string().optional(),
    "tps": z.number().optional(),
});
export type Performance = z.infer<typeof PerformanceSchema>;

export const ProductSchema = z.object({
    name: z.string(),
    authors: z.array(z.string()).optional(),
    "homepage": z.string().optional(),
    "docs": z.string().optional(),
    "github": z.string().optional(),
    "opensource": z.boolean().optional(),
    "license": z.string().optional(),
    "hosted_offering": z.enum(['yes', 'no', 'n/a', 'future']).optional(),
    "byoc_offering": z.enum(['yes', 'no', 'n/a', 'future']).optional(),
});
export type Product = z.infer<typeof ProductSchema>;

export const RatingsClassSchema = z.object({
    "rating": RatingSchema.optional(),
    "reason": z.union([z.null(), z.string()]).optional(),
});
export type ContinuityClass = z.infer<typeof RatingsClassSchema>;

export const MinimumSystemRequirementsSchema = z.object({
    "cpu": z.number().optional(),
    "memory": z.string().optional(),
});
export type MinimumSystemRequirements = z.infer<typeof MinimumSystemRequirementsSchema>;

export const RatingsSchema = z.object({
    "continuity": RatingsClassSchema.optional(),
    "testability": RatingsClassSchema.optional(),
    "support": RatingsClassSchema.optional(),
    "learning_curve": RatingsClassSchema.optional(),
    "security": RatingsClassSchema.optional(),
    "monitoring": RatingsClassSchema.optional(),
    "required_resources": RatingsClassSchema.optional(),
    "ease_of_deployment": RatingsClassSchema.optional(),
    "developer_ux": RatingsClassSchema.optional(),
    "community": RatingsClassSchema.optional(),
});
export type Ratings = z.infer<typeof RatingsSchema>;

export const TechnologySchema = z.object({
    "network_topology": z.array(z.string()).optional(),
    "client_sdks": z.array(z.string()).optional(),
    "written_in": z.array(z.string()).optional(),
    "database": z.array(z.string()).optional(),
    "external_dependencies": z.array(z.string()).optional(),
    "minimum_system_requirements": MinimumSystemRequirementsSchema.nullable().optional(),
});
export type Technology = z.infer<typeof TechnologySchema>;

export const SystemSchema = z.object({
    "product": ProductSchema,
    "technology": TechnologySchema.optional(),
    "features": FeaturesSchema.optional(),
    "company": CompanySchema.optional(),
    "community": SystemCommunitySchema.optional(),
    "performance": PerformanceSchema.optional(),
    "ratings": RatingsSchema.optional(),
    "articles": z.array(z.string()).optional(),
});
export type System = z.infer<typeof SystemSchema>;
